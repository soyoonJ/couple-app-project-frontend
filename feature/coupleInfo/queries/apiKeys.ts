import instance from 'utils/api';

const apiKeys = {
    editCoupleInfo: async (coupleData: {
        anniversary?: string;
        nickname?: string;
        backgroundColor?: string;
    }) => await instance.post(`/couples/info`, coupleData),
};

export default apiKeys;
