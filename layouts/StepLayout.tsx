import styled from 'styled-components';
import { ElButton } from 'components';
import FirstStep from 'public/images/icons/heart-step-01.svg';
import SecondStep from 'public/images/icons/heart-step-02.svg';

interface StepLayoutProps {
    title: string;
    children: React.ReactNode;
    type: 'submit';
    disabled: boolean;
}

interface ComponentType {
    [title: string]: {
        icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
        button: string;
    };
}

const COMPONENT_LIST: ComponentType = {
    회원가입: {
        icon: <FirstStep />,
        button: '가입완료',
    },
    '커플 코드': {
        icon: <SecondStep />,
        button: '연결하기',
    },
};

const StepLayout = ({ title, children, type, disabled }: StepLayoutProps) => {
    return (
        <StepLayoutWrapper>
            <div className="title-box">
                <h2>{title}</h2>
                <div>{COMPONENT_LIST[title].icon}</div>
            </div>
            <div className="form-box">{children}</div>
            <ElButton type={type} _disabled={disabled}>
                {COMPONENT_LIST[title].button}
            </ElButton>
        </StepLayoutWrapper>
    );
};

export default StepLayout;

const StepLayoutWrapper = styled.div`
    padding: 25px;

    .title-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;

        h2 {
            color: #3b3d49;
            font-weight: 600;
            font-size: 24px;
        }
    }

    .form-box {
        margin-bottom: 50px;

        select option[value=''][disabled] {
            display: none;
        }
        input[type='date']::before {
            content: attr(data-placeholder);
            width: 100%;
        }

        input[type='date']:valid::before {
            display: none;
        }
    }
`;
