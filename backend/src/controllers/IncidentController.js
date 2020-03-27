const connection = require('../database/connection')

module.exports = {
    async get(req, res) {
        const ong_id = req.headers.authorization
        if (ong_id) {
            const incidentsByOng = await connection('incidents')
                .where('ong_id', ong_id)
                .select('*')
            return res.json(incidentsByOng)
        } else {
            const { page = 1} = req.query
            const incidents = await connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(5)
                .offset((page - 1) * 5)
                .select([
                    'incidents.*', 
                    'ongs.name', 
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city', 
                    'ongs.uf'
                ])
            
            const [countIncidents] = await connection('incidents').count()

            return res
                .header('x-total-items', countIncidents['count(*)'])
                .header('x-previous-page', page <= 1 ? 1 : page - 1)
                .header('x-next-page', parseInt(page) + 1)
                .json(incidents)
        }
    },
    async insert(req, res) {
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert({
            title, description, value, ong_id
        })

        return res.json({ id })
    },
    async delete(req, res) {
        const { id } = req.params
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (incident.ong_id !== ong_id) return res.status(401).json({ error: 'Operation not permitted.'})

        await connection('incidents')
            .where('id', id)
            .delete()

        return res.status(204).send()
    }
}