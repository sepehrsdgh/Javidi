import ImageAbove from "../../layout/ImageAbove";
import ProjectCard from "./ProjectCard";

export default function FinalProjectCard(props) {
  const { subTitle } = props;
  return <ImageAbove src={subTitle} {...props} />;
}
