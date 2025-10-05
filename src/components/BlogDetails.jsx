import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const blogs = useLoaderData([])
    const blog = blogs.slice(0,14).find(blog => blog.id === id)
    const {author, bannerImage, company, content, date, title} = blog;
    return (
        <div className="mx-auto lg:w-[70%] border-2 my-10 p-3 md:p-5 rounded-lg border-neutral-300 bg-base-300 flex flex-col gap-4 space-y-6 pops">
            <Helmet>
        <title>Blog {id} Details | NexJob</title>
      </Helmet>
            <img src={bannerImage || '/error.png'} alt={title} className="rounded-md md:h-130 object-cover" />
            <div className="space-y-3">
                <h3 className="text-lg font-medium text-neutral-500">{date}</h3>
                {/* details */}
                <h2 className="text-3xl font-semibold text-base-200">{title}</h2>
                <h4 className="md:text-lg font-semibold text-neutral-600 ">Author : {author}</h4>
                <h4 className="md:text-xl text-neutral-600">Company : <span className="text-primary px-6 py-1 border border-primary/70 font-semibold rounded-full  text-sm md:text-base bg-primary/10">{company}</span></h4>
                <p className="text-base/normal md:text-lg/relaxed my-5 text-neutral-500 font-normal mb-8">Details : {content}</p>

                 <Link to={'/blogs'} className="px-10 text-lg py-4 font-semibold rounded-md bg-secondary flex w-fit gap-2 items-center"><FaArrowLeft /> Read More Blogs</Link>   
            </div>
            
        </div>
    );
};

export default BlogDetails;