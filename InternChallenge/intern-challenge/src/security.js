const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    next();
  } catch (error) {
    next(error);
  }
}
export default requireToken;
