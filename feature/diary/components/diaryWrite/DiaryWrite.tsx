import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useImage from 'feature/diary/hook/useImage';
import { WriteHead, WriteContent, WriteBar } from '../index';

const DiaryWrite = () => {
    const router = useRouter();
    const { id, startDate, endDate } = router.query;
    const [diary, setDiary] = useState({ title: '', content: '' });

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiary((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const [imgFile, imgUrl, handleUpload, handleDelete] = useImage();

    return (
        <DiaryWriteWrapper>
            <WriteHead />
            <WriteContent
                startDate={startDate}
                endDate={endDate}
                diary={diary}
                onChangeContent={onChangeContent}
                imgUrl={imgUrl}
                handleDelete={handleDelete}
            />
            <WriteBar handleUpload={handleUpload} />
        </DiaryWriteWrapper>
    );
};

export default DiaryWrite;

const DiaryWriteWrapper = styled.div``;
