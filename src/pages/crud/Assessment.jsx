import { useContext, useEffect, useState } from "react";
import { AssessmentStateContext , AssessmentDispatchContext} from "../../App";
import AssessmentList from "../../components/crud_component/AssessmentList";
import { useNavigate } from "react-router-dom";



const Assessment = () => {
  const navigate = useNavigate();
  const assessmentList = useContext(AssessmentStateContext);
  const [data, setData] = useState(assessmentList);


  return (
    <div>
      <AssessmentList assessmentList={data} />
    </div>
  );
}
export default Assessment;