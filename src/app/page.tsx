import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-start border w-[300px] m-auto">
        <div className="flex flex-col gap-2">
          {/* header */}
          <h1>Daily Task</h1>
          {/* complated todo */}
          <div className="flex flex-row justify-center items-center">
            complated task
          </div>
        </div>
        <div className="flex flex-col">
          <h2>To do Tasks</h2>
          {/* todo list */}
          <div className="flex flex-row justify-center items-center">
            list one
          </div>
        </div>
      </div>
    </div>
  );
}
