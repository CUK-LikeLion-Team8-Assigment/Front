import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AssessmentStateContext } from "../../App";
import Editor from "../../components/crud_component/Editor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams(); //edit/1 에서 1 을 id 로 받아옴

  const assessmentList = useContext(AssessmentStateContext);

  useEffect(() => {
    if (assessmentList.length >= 1) {
      const targetAssessment = assessmentList.find(
        (it) => parseInt(it.userId) === parseInt(id)
      );
      setOriginData(targetAssessment);

      if (targetAssessment) {
      } else {
        navigate("/", { replace: true });
      } //잘못된 id 값을 넣었을때 홈으로 가게 함
    }
  }, [id, assessmentList]);

  return (
    <div>{originData && <Editor isEdit={true} originData={originData} />}</div>
  );
};
export default Edit;
