
// import Home from "./component/home";
import Navbar from "./component/navBar"; 
import BJPAnimatedBanner from "./component/Crousel";
import BlogPage  from "./LatestBlogs/page";
// import UpcomingEvents from "./Events/page";
import UpcomingEvents from "./Events/page";
import Gallery from "./component/gallery";
export default function Homes() {
  return (
    <>
    {/* <Home/> */}
    <Navbar/>
    <BJPAnimatedBanner/>
    <BlogPage/>
    <UpcomingEvents/>
    <Gallery/>
    </>
  );
}
