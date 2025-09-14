import { index, route } from "@react-router/dev/routes";

// export default [index("routes/home.jsx")];
export default [index("components/home/Home.jsx"), route("about", "components/aboutUs/AboutUs.jsx")];
