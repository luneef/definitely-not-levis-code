import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.replace(JSON.parse(localStorage.getItem("itemPath")));
    }, 3000);
    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ paddingTop: "10em" }}>
      <h2>PAGE NOT FOUND</h2>
      <h2>Oooops, look like somthin happend</h2>
      <h3>Being redireted to main item</h3>
    </div>
  );
};

export default PageNotFound;
