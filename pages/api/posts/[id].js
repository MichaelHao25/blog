export default (req, res) => {
    const {
        query: { id }
    } = req;
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(`Post: ${id}`);
};
// http://localhost:3000/api/posts/11
