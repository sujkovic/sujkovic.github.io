const scrollFunc = (page) => {
  let height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.querySelector("html").offsetHeight,
    document.querySelector("html").scrollHeight,
    document.querySelector("html").offsetHeight
  );

  let screenHeight = height / 5;

  if (page === "header") {
    window.scrollTo(0, 0);
  }
  if (page === "about") {
    window.scrollTo(0, screenHeight);
  }
  if (page === "projects") {
    window.scrollTo(0, screenHeight * 2);
  }
  if (page === "contact") {
    window.scrollTo(0, screenHeight * 4);
  }
};

export default scrollFunc;
