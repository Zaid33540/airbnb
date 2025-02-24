//Core module
const path = require("path");

//External module
const express = require("express");

//Local module
const rootDir = require("./utils/pathUtil");

//Local module
const userRouter = require("./routes/userRouter");

//Local module
const { hostRouter } = require("./routes/hostRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(express.static(path.join(rootDir, "public"))); //This will serve the static files present in the public folder.

app.use(userRouter);

app.use("/host", hostRouter); //This "/host" will get concatinated with the other routes present in hostRouter. This will make the handling easy and we can remove "/host' from all the routes present in hostRouter. Same thing we can do with the userRouter.

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "Page Not Found ", currentPage: "404" });
}); //If we will keep this middleware at the top then it will be called for every request and it will not allow the request to reach the next middleware.

process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
