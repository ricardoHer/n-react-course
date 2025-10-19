import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../Components/Title.jsx";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams?.get("title");
  const description = searchParams?.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Task Details</Title>
        </div>

        <div className="bg-slate-600 p-4 rounded-md space-y-4 shadow">
          <div>
            <h2 className="text-xl text-slate-100 font-bold">Title:</h2>
            <p className="text-slate-300">{title}</p>
          </div>
          <div>
            <h2 className="text-xl text-slate-100 font-bold">Description:</h2>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
