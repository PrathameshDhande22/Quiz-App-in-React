import { useSelector, useDispatch } from "react-redux";
import { ScoreCard } from "../ScoreCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { setOpen } from "../../States/Reducers/startbtn";
import Quiz from "../Quiz";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { setZero } from "../../States/Reducers/nextques";
import { Winner } from "../Winner";
import { setScore } from "../../States/Reducers/score";
import { setQu } from "../../States/Reducers/correctans";
import { setName } from "../../States/Reducers/name";

export const QuizPage = () => {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.Name);
  const quesno = useSelector((state) => state.qCount);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    const apiurl = "https://quizapi.io/api/v1/questions?limit=10";
    const apiKey = process.env.REACT_APP_QUIZ_API;
    function getQuestion() {
      axios
        .get(apiurl, {
          headers: {
            "X-Api-Key": apiKey,
          },
        })
        .then((res) => setQuestion(res.data));
    }
    getQuestion();
  }, []);

  const handleback = () => {
    dispatch(setName("User 1"))
    dispatch(setQu());
    dispatch(setScore());
    dispatch(setZero());
    dispatch(setOpen());
    navi("/");
  };

  return (
    <div className="quizpg">
      <Button
        variant="contained"
        color="success"
        startIcon={<ArrowBackIcon />}
        className="ms-2 mt-2"
        onClick={handleback}
      >
        Go Back
      </Button>
      <h3 className="quiz-wel">Welcome {name}</h3>
      <ScoreCard />
      {(() => {
        if (loading === false && quesno < 11) {
          return (
            <Quiz
              que={question[quesno - 1].question}
              options={question[quesno - 1].answers}
              correctans={question[quesno - 1].correct_answers}
            />
          );
        } else if (loading === true) {
          return (
            <div className="loadingbar">
              <Bars
                height="80"
                width="80"
                color="#5900ff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
              <span>Loading...</span>
            </div>
          );
        }
      })()}
      {(() => {
        if (quesno >= 11) {
          return <Winner />;
        }
      })()}
    </div>
  );
};
