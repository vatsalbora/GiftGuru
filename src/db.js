import pg from "pg";

const client = new pg.Client({
  connectionString:
    "postgres://cxefyfoslgpefq:444f0af55f8db9a704c458efa99e88becf5b6faa2e9bc67548fe4b2b2c47480b@ec2-3-217-251-77.compute-1.amazonaws.com:5432/d7hm6ddur2pgn",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default client;
