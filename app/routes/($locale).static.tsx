import {Await, useLoaderData, defer} from '@remix-run/react';
import {Suspense} from 'react';

export async function loader({request}) {
  const url = new URL(request.url);
  const delay = Number(url.searchParams.get('delay') ?? 1000);
  console.log(`Delaying for ${delay}ms`);
  const delayed = new Promise((resolve) =>
    setTimeout(() => resolve('done'), delay),
  );
  return defer({delayed});
}

export default function Search() {
  const {delayed} = useLoaderData<typeof loader>();
  console.log('delayed', delayed);
  return (
    <div>
      <h1>Hello world</h1>
      <p>This is just a static page without any loaders</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={delayed} errorElement={<p>Error loading data</p>}>
          {(response) => {
            console.log('response', response);
            return <p>done streaming promise</p>;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
