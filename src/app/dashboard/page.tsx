'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const Dashboard = () => {
  // const [data, setdata] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     setError(false);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //       setLoading(false);
  //     }
  //     const data = await res.json()
  //     setLoading(false);
  //     setdata(data);
  //   };
  //   getData();
  // }, []);
  // console.log('====testing---',data)
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (session.status === 'loading') {
    return <p>Loading....</p>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  if (session.status === 'authenticated') {
    return <div>{JSON.stringify(data)}</div>;
  }
};

export default Dashboard;
