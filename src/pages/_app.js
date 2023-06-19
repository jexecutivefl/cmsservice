import '@aws-amplify/ui-react/styles.css';
import '../styles/globals.css'
import {useRouter} from "next/router";
import PublicLayout from "@/layout/PublicLayout";
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import 'react-quill/dist/quill.snow.css';
Amplify.configure({ ...awsExports, ssr: true });
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPublicRoute = router.pathname === '/' || router.pathname === '/about';
  const Layout = isPublicRoute ? PublicLayout : ({ children }) => <>{children}</>;

  return (
   <Layout>
     <Component {...pageProps} />
   </Layout>
  )
}
