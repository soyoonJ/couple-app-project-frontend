import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { pixelToVh, pixelToVw } from 'utils/utils';
import { useMutationCoupleInfo } from 'feature/coupleInfo/queries/mutationFn';
// import useMutationHome from '../queries/mutationFn/mutationFn';

import Modal from './Modal';
import Grid from 'components/Grid';
import Camera from 'public/icons/camera.svg';
import Paint from 'public/icons/paint.svg';
import ChevronRight from 'public/icons/chevron-right.svg';
import CheckSmall from 'public/icons/check-small.svg';

const EditMenu = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${pixelToVh(55)};
    border-bottom: 1px solid ${(props) => props.theme.grey_2};

    button {
        all: unset;
        display: flex;
        align-items: center;

        span {
            padding-left: 12px;
            ${(props) => props.theme.Body_1};
        }

        input {
            display: none;
        }
    }
`;

const ColorChipsContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${pixelToVw(24)};

    & > div {
        position: relative;
        width: ${pixelToVw(28)};
        height: ${pixelToVw(28)};
        border-radius: 50%;
    }

    & > div > article > div {
        position: absolute;
        top: ${pixelToVw(-6)};
        left: ${pixelToVw(-6)};
        width: ${pixelToVw(40)};
        height: ${pixelToVw(40)};
        border: 1px solid #3b3d49;
        border-radius: 50%;
    }

    svg {
        position: absolute;
        top: ${pixelToVw(9.2)};
        left: ${pixelToVw(9)};
    }
`;
const ColorSaveButton = styled.button`
    position: absolute;
    left: 24px;
    bottom: ${pixelToVh(32)};
    width: calc(100% - 48px);
    height: ${pixelToVh(48)};
    border-radius: 62px;
    background: ${(props) => props.theme.primaryPink};
    color: #fff;
    ${(props) => props.theme.Body_2};
`;

const ModalBackground = (props: any) => {
    const { closeButton, background } = props;
    const [title, setTitle] = useState('');

    const colorChipPage = () => {
        setTitle('색상 선택');
    };
    const colorChips = [
        '#F5F5F5',
        '#FCE8D5',
        '#FBF4D8',
        '#E2EEE0',
        '#DCEDEA',
        '#E1ECF8',
        '#E2E3FA',
        '#E9DDF8',
        '#F0E0F1',
        '#F1DAE4',
        '#FCE5E5',
    ];

    const [bgColor, setBgColor] = useState<string>(background ?? '#F5F5F5');
    const changeBgColor = (colorCode: string) => {
        setBgColor(colorCode);
    };

    const coupleInfoMutation = useMutationCoupleInfo();
    // const mutate = useMutationHome();

    // useEffect(() => {
    //     mutate();
    //     console.log('엄');
    // }, [coupleInfoMutation, mutate]);

    const saveBackground = () => {
        coupleInfoMutation({ backgroundColor: bgColor });
        closeButton();
    };

    const setBackground = () => {
        let myInput = document.getElementById('backgroundInput');
        myInput?.click();
    };

    return (
        <Modal closeButton={closeButton} title={title}>
            {title === '' ? (
                <Grid paddingTop="0">
                    <EditMenu onClick={setBackground}>
                        <button>
                            <Camera width="18" height="18" />
                            <span>배경 사진</span>
                            <input
                                id="backgroundInput"
                                type="file"
                                accept=".png, .jpg, .jpeg, .gif, .jfif, .webp, image/*;capture=camera"
                            />
                        </button>
                        <ChevronRight />
                    </EditMenu>

                    <EditMenu onClick={colorChipPage}>
                        <button>
                            <Paint width="18" height="18" />
                            <span>배경 색상</span>
                        </button>
                        <ChevronRight />
                    </EditMenu>
                </Grid>
            ) : (
                <Grid paddingTop="24px">
                    <Grid paddingTop="0">
                        <ColorChipsContainer>
                            {colorChips.map((el) => {
                                return (
                                    <div
                                        key={el}
                                        style={{ background: el }}
                                        onClick={() => changeBgColor(el)}
                                    >
                                        {el === bgColor && (
                                            <article>
                                                <CheckSmall />
                                                <div></div>
                                            </article>
                                        )}
                                    </div>
                                );
                            })}
                        </ColorChipsContainer>
                    </Grid>

                    <ColorSaveButton onClick={saveBackground}>
                        완료
                    </ColorSaveButton>
                </Grid>
            )}
        </Modal>
    );
};

export default ModalBackground;
