import styled from 'styled-components';
import useAddStory from '../../libs/hooks/stories/useAddStory';
import useTags from '../../libs/hooks/stories/useTags';
import EditorFooter from '../common/editor/EditorFooter';
import EditorTitle from '../common/editor/EditorTitle';
import QuillEditor from '../common/editor/QuillEditor';
import ThumbnailBox from '../common/editor/ThumbnailBox';
import AddTagBox from './tag/AddTagBox';

export default function AddStory() {
  const {
    title,
    body,
    thumbnail,
    tags,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    onThumbnail,
    onBack,
    onAddStory,
  } = useAddStory();
  const { input, onSetTags, onChangeText, localTags, removeTag } = useTags({
    tags,
    onChangeTags,
  });

  return (
    <Container>
      <EditorBox>
        <Contents>
          <EditorTitle
            placeholder="제목을 입력하세요"
            value={title}
            onChange={onChangeTitle}
          />

          <TagsBox>
            <AddTagBox
              input={input}
              onSetTags={onSetTags}
              onChangeText={onChangeText}
              localTags={localTags}
              removeTag={removeTag}
            />
          </TagsBox>

          <ThumbnailBox thumbnail={thumbnail} onThumbnail={onThumbnail} />

          <QuillEditor QuillChange={onChangeBody} body={body} />
        </Contents>

        <EditorFooter onBack={onBack} onSubmit={onAddStory} />
      </EditorBox>
    </Container>
  );
}

// Styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation: fadeIn 0.5s forwards;
`;

const EditorBox = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Contents = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const TagsBox = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
