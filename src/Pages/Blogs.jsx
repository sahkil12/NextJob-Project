import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Errorpages/Loader";

const Blogs = () => {
    const blogs = useLoaderData([])
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }
    return (
       <section className="bg-base-300">
	<div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link to={`/blog/${blogs[0].id}`}   className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={blogs[0].bannerImage} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
				<span className="text-xs ">{blogs[0].date}</span>
				<p>{blogs[0].content.slice(0, 200)}</p>
			</div>
		</Link>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.slice(1,14).map(blog => (
                    <Link to={`/blog/${blog.id}`} key={blog.id} rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-base-100 p-4 rounded-md">
				<img role="presentation" className="object-cover w-full rounded h-54"  src={blog.bannerImage || '/error.png'} alt={blog.title || "Blog banner image"}/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
					<span className="text-xs ">{blog.date}</span>
					<p>{blog.content.slice(0, 250)}</p>
				</div>
			</Link>
                ))
            }
		</div>
		
	</div>
</section>
    );
};

export default Blogs;