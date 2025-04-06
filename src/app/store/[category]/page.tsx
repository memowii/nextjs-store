interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
  const { category } = props.params;
  return <div>Dynamic Category: {category}</div>;
}
