import { db } from "../database";

export const getStudentRoute = {
    method: 'GET',
    path: '/api/student',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM student'
        );
        return results;
     }
}