import React from 'react';
import {withAuthenticator} from "@aws-amplify/ui-react";
import {Amplify} from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

function Dashboard(props) {
  return (
   <div>Dashboard</div>
  );
}

export default withAuthenticator(Dashboard);