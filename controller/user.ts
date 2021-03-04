import { Iuser } from "../model/user";

let users: Array<Iuser> = [
  {
    id: "1",
    name: "Leonardo Dev",
    email: "leonardodev@gmail.com",
    created_at: new Date("2021-03-01"),
    updated_at: new Date("2021-03-02"),
  },
  {
    id: "1",
    name: "Bianca Trader",
    email: "biancatrader@gmail.com",
    created_at: new Date("2021-03-01"),
    updated_at: new Date("2021-03-02"),
  },
  {
    id: "1",
    name: "Gabriela Radiologia",
    email: "gabrielaradiologia  @gmail.com",
    created_at: new Date("2021-03-01"),
    updated_at: new Date("2021-03-02"),
  },
];

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

export { getUsers };
