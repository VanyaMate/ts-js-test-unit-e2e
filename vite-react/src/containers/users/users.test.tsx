import App from '@/App.tsx';
import { IUser } from '@/containers/users/users.tsx';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { describe, it as test, expect, vi } from 'vitest';


vi.mock('axios');

/**
 * @vitest-environment jsdom
 */
describe('Users', () => {
    const response: () => Promise<{ data: IUser[] }> = async (): Promise<{
        data: IUser[]
    }> => ({
        data: [
            {
                'id'      : 1,
                'name'    : 'Leanne Graham',
                'username': 'Bret',
                'email'   : 'Sincere@april.biz',
                'address' : {
                    'street' : 'Kulas Light',
                    'suite'  : 'Apt. 556',
                    'city'   : 'Gwenborough',
                    'zipcode': '92998-3874',
                    'geo'    : {
                        'lat': '-37.3159',
                        'lng': '81.1496',
                    },
                },
                'phone'   : '1-770-736-8031 x56442',
                'website' : 'hildegard.org',
                'company' : {
                    'name'       : 'Romaguera-Crona',
                    'catchPhrase': 'Multi-layered client-server neural-net',
                    'bs'         : 'harness real-time e-markets',
                },
            },
            {
                'id'      : 2,
                'name'    : 'Ervin Howell',
                'username': 'Antonette',
                'email'   : 'Shanna@melissa.tv',
                'address' : {
                    'street' : 'Victor Plains',
                    'suite'  : 'Suite 879',
                    'city'   : 'Wisokyburgh',
                    'zipcode': '90566-7771',
                    'geo'    : {
                        'lat': '-43.9509',
                        'lng': '-34.4618',
                    },
                },
                'phone'   : '010-692-6593 x09125',
                'website' : 'anastasia.net',
                'company' : {
                    'name'       : 'Deckow-Crist',
                    'catchPhrase': 'Proactive didactic contingency',
                    'bs'         : 'synergize scalable supply-chains',
                },
            },
            {
                'id'      : 3,
                'name'    : 'Clementine Bauch',
                'username': 'Samantha',
                'email'   : 'Nathan@yesenia.net',
                'address' : {
                    'street' : 'Douglas Extension',
                    'suite'  : 'Suite 847',
                    'city'   : 'McKenziehaven',
                    'zipcode': '59590-4157',
                    'geo'    : {
                        'lat': '-68.6102',
                        'lng': '-47.0653',
                    },
                },
                'phone'   : '1-463-123-4447',
                'website' : 'ramiro.info',
                'company' : {
                    'name'       : 'Romaguera-Jacobson',
                    'catchPhrase': 'Face to face bifurcated interface',
                    'bs'         : 'e-enable strategic applications',
                },
            },
        ],
    });

    test('All', async () => {
        vi.mocked(axios.get).mockReturnValue(response()); // <- тестил
        const { container }: { container: HTMLElement } = render(
            <MemoryRouter initialEntries={ [ '/users' ] }>
                <App/>
            </MemoryRouter>,
        );
        expect(vi.mocked(axios.get)).toBeCalledTimes(1);
        await waitFor(() => {
            const items: NodeListOf<HTMLAnchorElement> = container.querySelectorAll('a.item[href^="/user/"]');
            expect(items.length).toBe(3);
        });
    });
});