function LoadingGif() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="grid gap-2">
        <h1 className="text-3xl my-10">Loading, Please Wait</h1>

        <div className="flex items-center justify-center ">
          <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingGif;
