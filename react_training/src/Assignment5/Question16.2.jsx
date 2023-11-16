import withDataFetching from "./Question16.1";



const FetchAndDisplayData = ({ data }) => {
  console.log(data,"sss=---------------------------");
  // console.log(handleDataFetch);
  return (
    <>
      <h3>Fetch and display data using HOC</h3>
      {/* <button onClick={handleDataFetch}>Fetch Data</button> */}
      {data?.data?.map((item) => {
        return (<li>{item.title}</li>);
      })}
    </>
  );
};
export default withDataFetching(FetchAndDisplayData);
