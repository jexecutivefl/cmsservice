import {useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listTasks} from "@/graphql/queries";

export const useTasks = (sprintID) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, [sprintID]);

  async function fetchTasks() {
    try {
      const taskData = await API.graphql(graphqlOperation(listTasks, {
        filter: {
          sprintID: {
            eq: sprintID
          }
        }
      }));
      setTasks(taskData.data.listTasks.items);
    } catch (err) {
      console.log('error fetching tasks:', err);
    }
    setLoading(false);
  }

  return { tasks, loading };
};
