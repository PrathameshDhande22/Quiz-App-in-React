import { useSelector } from "react-redux";
export const Winner = () => {
  const correctans = useSelector((state) => state.cansCount);
  return (
    <div className="quizwindow text-center">
      <div className="h2">You Gave {correctans} ✅ Answers</div>
      <div className="h2">and {10 - correctans} ❌ Answers</div>
      <div className="h1 border-bottom border-success border-4">
        Try Hard Next Time !
      </div>
    </div>
  );
};
