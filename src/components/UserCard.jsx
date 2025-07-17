import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  HeartOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

export default function UserCard({ user, onEdit, onDelete, onLike, isLiked }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <Card
      style={{
        width: "100%",
        height: "425px",
      }}
      cover={
        <div
          style={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={avatarUrl}
            alt={user.name}
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "space-evenly",
              justifyContent: "space-evenly",
            }}
          />
        </div>
      }
      actions={[
        isLiked ? (
          <HeartFilled
            key="like"
            onClick={() => onLike(user)}
            style={{ color: "red", fontSize: "20px" }}
          />
        ) : (
          <HeartOutlined
            key="like"
            onClick={() => onLike(user)}
            style={{ color: "red", fontSize: "20px" }}
          />
        ),
        <EditOutlined
          key="edit"
          onClick={() => onEdit(user)}
          style={{ fontSize: "20px" }}
        />,
        <DeleteFilled
          key="delete"
          onClick={() => onDelete(user)}
          style={{ fontSize: "20px" }}
        />,
      ]}
    >
      <Meta
        title={<span style={{ fontWeight: "normal" }}>{user.name}</span>}
        description={
          <>
            <p>
              <MailOutlined
                style={{
                  color: "black",
                  paddingRight: "10px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              />{" "}
              <span
                style={{
                  color: "#4b4b4bff",
                  fontSize: "14px",
                }}
              >
                {user.email}
              </span>
            </p>
            <p>
              <PhoneOutlined
                style={{
                  color: "black",
                  paddingRight: "10px",
                  fontSize: "18px",
                }}
              />{" "}
              <span
                style={{
                  color: "#4b4b4bff",
                  fontSize: "14px",
                }}
              >
                {user.phone}
              </span>
            </p>
            <p>
              <GlobalOutlined
                style={{
                  color: "black",
                  paddingRight: "10px",
                  fontSize: "18px",
                }}
              />
              <span
                style={{
                  color: "#4b4b4bff",
                  fontSize: "14px",
                }}
              >
                http://{user.website}
              </span>
            </p>
          </>
        }
      />
    </Card>
  );
}
