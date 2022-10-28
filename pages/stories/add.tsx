import type { NextPage } from 'next';
import AddStory from '../../components/stories/AddStory';
import useLogged from '../../libs/hooks/common/useLogged';

const AddStoryPage: NextPage = () => {
  useLogged();

  return <AddStory />;
};

export default AddStoryPage;
