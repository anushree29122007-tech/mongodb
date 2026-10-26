// FULL PROGRAM - SocialMediaDB

use SocialMediaDB;

// Create Indexes
db.users.createIndex({ username: 1 }, { unique: true });
db.posts.createIndex({ author_id: 1, created_at: -1 });

// Insert Users
db.users.insertMany([
  {
    _id: ObjectId("60c72b2f9b1d8b2bad754a1a"),
    username: "John_doe",
    email: "John@example.com",
    profile: {
      bio: "Tech enthusiast & developer",
      avatar: "link_to_image"
    },
    followers_count: 1420,
    following_count: 512
  },
  {
    _id: ObjectId("60c72b2f9b1d8b2bad754a1b"),
    username: "Jane_smith",
    email: "Jane@example.com",
    profile: {
      bio: "Digital artist & Traveler",
      avatar: "link_to_image2"
    },
    followers_count: 3200,
    following_count: 890
  }
]);

// Insert Posts with Likes and Comments
db.posts.insertMany([
  {
    _id: ObjectId("60c72b3f9b1d8b2bad754a1c"),
    author_id: ObjectId("60c72b2f9b1d8b2bad754a1a"),
    content: "Just designed my first NoSQL database Schema! Highly scalable.",
    created_at: ISODate("2026-09-23T10:00:00Z"),
    interactions: {
      likes_count: 42,
      shares_count: 5,
      liked_by: [ObjectId("60c72b2f9b1d8b2bad754a1b")]
    },
    comments: [
      {
        comment_id: ObjectId("60c72b4f9b1d8b2bad754a1d"),
        author_id: ObjectId("60c72b2f9b1d8b2bad754a1b"),
        username: "Jane_smith",
        text: "Awesome work! Looks very clean.",
        timestamp: ISODate("2026-09-23T10:15:00Z")
      }
    ]
  }
]);

// Aggregation - Join Posts with Users
db.posts.aggregate([
  {
    $match: { author_id: ObjectId("60c72b2f9b1d8b2bad754a1a") }
  },
  {
    $lookup: {
      from: "users",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details"
    }
  },
  { $unwind: "$author_details" },
  {
    $project: {
      "author_details.username": 1,
      content: 1,
      "interactions.likes_count": 1,
      comments: 1,
      created_at: 1
    }
  }
]);