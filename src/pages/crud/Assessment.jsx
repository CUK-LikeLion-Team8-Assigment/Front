import { useContext, useState } from "react";
import { AssessmentStateContext } from "../../App";
import AssessmentList from "../../components/crud_component/AssessmentList";

const Assessment = () => {
  const assessmentList = useContext(AssessmentStateContext);
  const [data, setData] = useState(assessmentList);

  return (
    <div>
      <AssessmentList assessmentList={data} />
    </div>
  );
};
export default Assessment;
