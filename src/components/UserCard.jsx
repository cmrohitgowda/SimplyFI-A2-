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
import "./UserCard.css";

export default function UserCard({ user, onEdit, onDelete, onLike, isLiked }) {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;

  return (
    <Card
      className="custom-user-card"
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid #e8e8e8",
        borderRadius: "0px",
      }}
      cover={
        <div
          style={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid #e8e8e8",
            borderLeft: "1px solid ##e8e8e8",
            borderRight: "1px solid #e8e8e8",
            borderRadius: "0px",
          }}
        >
          <img
            src={avatarUrl}
            alt={user.name}
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
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
          key={user.id}
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
