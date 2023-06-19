import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import {withAuthenticator} from "@aws-amplify/ui-react";
import '../amp-config'
import MainLayout from "@/layout/MainLayout";
import {ProjectDashboard} from "@/views/ProjectDashboard";

function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
    } catch (error) {
      console.log('error checking user: ', error);
    }
  }

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
   <MainLayout onSignOut={handleSignOut} user={user}>
     <ProjectDashboard />
   </MainLayout>
  );
}

export default withAuthenticator(DashboardPage);


