import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import styles from "./ReviewItem.module.css"
import { useState } from "react";

interface Props {
  review: {
    id: number;
    user_id: string;
    user_name: string;
    content: string;
    rating: number;
    created_at: string;
  };
  onUpdate: () => void;
}

export default function ReviewItem({ review, onUpdate }: Props) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);  
  const [editedContent, setEditedContent] = useState(review.content);  
  const [editedRating, setEditedRating] = useState(review.rating); 

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${review.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onUpdate();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:5000/api/reviews/${review.id}`,
        {
          content: editedContent,
          rating: editedRating,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsEditing(false);
      onUpdate();
    } catch (err) {
      console.error("Edit failed", err);
    }
  };

  return (
    <div>
      <p>
        <strong>{review.user_name || "Anonymous"}</strong> ({review.rating}★)
      </p>
      {isEditing ? (
        <div>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={4}
            cols={50}
          />
          <div>
            <label>Rating: </label>
            <input
              type="number"
              value={editedRating}
              onChange={(e) => setEditedRating(Number(e.target.value))}
              min={1}
              max={5}
            />
          </div>
          <button onClick={handleSaveEdit} className={styles.save}>Save</button>
          <button onClick={handleEditToggle} className={styles.cancel}>Cancel</button>
        </div>
      ) : (
        <p>{review.content}</p>
      )}

      <p>{new Date(review.created_at).toLocaleString()}</p>

      {user?.id === review.user_id && (
        <div className={styles.reviewBtns}>
          <button className={styles.delete} onClick={handleDelete}>Delete</button>
          <button className={styles.edit} onClick={handleEditToggle}>Edit</button>  {/* Edit Button */}
        </div>
      )}
    </div>
  );
}
     
{/* <p>{review.content}</p>
<p>{new Date(review.created_at).toLocaleString()}</p>
{user?.id === review.user_id && (
  <button className={styles.delete} onClick={handleDelete}>Delete</button>
)}
</div>
);
} */}
