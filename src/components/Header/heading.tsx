type HeadingProps = {
  title: string;
};

const Heading = (props: HeadingProps) => (
  <h1 className="my-heading">{props.title}</h1>
);

export default Heading;
