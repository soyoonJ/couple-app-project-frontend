import axios from 'axios';

const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

const apiKeys = {
    getCoupleCode: async () =>
        await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}couples`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }),
    createCoupleConnect: async (inviteCode: string) =>
        await axios.post(
            `${process.env.NEXT_PUBLIC_API_KEY}couples`,
            inviteCode,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            },
        ),
};

export default apiKeys;
