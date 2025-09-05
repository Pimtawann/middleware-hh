export const validateCreateAssignment = (req, res, next) => {
  const { title, content, category, email } = req.body;
  const categoryList = ["Math", "English", "Biology"];
  const hasCategoryList = categoryList.includes(category);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!title) {
    return res.status(400).json({
      message: "Title is required.",
    });
  }
  if (!content || content.length < 500 || content.length > 1000) {
    return res.status(400).json({
      message: "Content is required and must be 500-100 characters.",
    });
  }
  if (!hasCategoryList) {
    return res.status(400).json({
      message:
        "Category is required and must be 'Math', 'English', or 'Biology' only.",
    });
  }

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      message: "A valid email is required.",
    });
  }

  next();
};
