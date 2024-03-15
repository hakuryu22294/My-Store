import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="text-4xl font-bold mt-4 tracking-tighter sm:text-5xl">
            Do bạn quá ngu không thể nhìn thấy trang này, hãy thông minh hơn để
            nhìn được ... Ahihi ....
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-4xl font-bold text-center">there was an error...</h4>
    </main>
  );
};

export default Error;
