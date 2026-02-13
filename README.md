<div align="center">
 
# Node.js Hello World API - Docker Tutorial

A beginner-friendly Docker hands-on project that teaches you how to containerize a Node.js REST API with full CRUD operations using Docker Compose.

<img width="4000" height="2250" alt="Project2_Arch_Diag" src="https://github.com/user-attachments/assets/39ffc56c-a999-499b-a958-9184d584b66c" />

<a href="https://www.buymeacoffee.com/Dheeraj3" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" height="50">
</a>

## [Subscribe](https://www.youtube.com/@dheeraj-choudhary?sub_confirmation=1) to learn more About Artificial-Intellegence, Machine-Learning, Cloud & DevOps.

<p align="center">
<a href="https://www.linkedin.com/in/dheeraj-choudhary/" target="_blank">
  <img height="100" alt="Dheeraj Choudhary | LinkedIN"  src="https://user-images.githubusercontent.com/60597290/152035581-a7c6c0c3-65c3-4160-89c0-e90ddc1e8d4e.png"/>
</a> 

<a href="https://www.youtube.com/@dheeraj-choudhary?sub_confirmation=1">
    <img height="100" src="https://user-images.githubusercontent.com/60597290/152035929-b7f75d38-e1c2-4325-a97e-7b934b8534e2.png" />
</a>    
</p>
</div>

---

## 📚 Project Overview and Learning Objectives

This project provides a **pre-built Node.js Express REST API** with in-memory CRUD operations, designed specifically for **DevOps and Cloud engineers** learning Docker containerization.

### What You'll Learn:
- ✅ How to containerize a Node.js application using Docker Compose
- ✅ Understanding Docker Compose configuration and service definitions
- ✅ Managing environment variables in containerized applications
- ✅ Implementing health checks for container monitoring
- ✅ Port mapping between host and container
- ✅ Working with Docker volumes and networking (basic concepts)
- ✅ Best practices for .dockerignore and layer caching

### What This Project IS:
- A **working REST API** with GET, POST, PUT, DELETE endpoints
- Ready-to-run with **zero application development required**
- Uses **in-memory storage** (data resets on container restart)
- Perfect for understanding Docker basics without database complexity

### What This Project IS NOT:
- A production-ready application (no database, data doesn't persist)
- A Node.js development tutorial (focus is on Docker, not coding)

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your system:

| Tool | Minimum Version | Check Command | Installation Guide |
|------|----------------|---------------|-------------------|
| **Docker** | 20.10+ | `docker --version` | [Install Docker](https://docs.docker.com/get-docker/) |
| **Docker Compose** | 2.0+ | `docker-compose --version` | [Install Docker Compose](https://docs.docker.com/compose/install/) |
| **Git** | 2.0+ | `git --version` | [Install Git](https://git-scm.com/downloads) |

**Note:** Docker Desktop for Mac/Windows includes Docker Compose by default.

### Verify Your Installation:
```bash
docker --version
# Expected output: Docker version 20.10.x or higher

docker-compose --version
# Expected output: Docker Compose version 2.x.x or higher
```

---

## 🚀 Complete Step-by-Step Instructions

Follow these steps to run the containerized Node.js API on your machine.

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/docker-nodejs-hello-api.git
cd docker-nodejs-hello-api
```

### Step 2: Review Project Files (Optional)
Take a moment to explore the project structure:
```bash
ls -la
```

You should see:
- `index.js` - The Node.js application code
- `package.json` - Node.js dependencies
- `docker-compose.yml` - Docker Compose configuration
- `.dockerignore` - Files excluded from Docker build
- `.gitignore` - Files excluded from Git
- `.env.example` - Environment variable template (optional)

### Step 3: Build the Docker Image
Build the Docker image using Docker Compose:
```bash
docker-compose build
```

**What's happening:**
- Docker reads `docker-compose.yml`
- Downloads Node.js 18 Alpine base image
- Installs npm dependencies
- Copies application code
- Creates a containerized application image

**Expected output:**
```
[+] Building 45.2s (10/10) FINISHED
 => [nodejs-api] exporting to image
 => => naming to docker.io/library/docker-nodejs-hello-api_nodejs-api
```

### Step 4: Start the Container
Run the container in detached mode (background):
```bash
docker-compose up -d
```

**What's happening:**
- Creates and starts the `nodejs-hello-api` container
- Maps port 3000 from container to your host machine
- Sets environment variables (NODE_ENV, PORT)
- Runs health checks every 30 seconds

**Expected output:**
```
[+] Running 1/1
 ✔ Container nodejs-hello-api  Started
```

### Step 5: Verify Container is Running
Check container status:
```bash
docker-compose ps
```

**Expected output:**
```
NAME                IMAGE                                    STATUS         PORTS
nodejs-hello-api    docker-nodejs-hello-api_nodejs-api       Up 10 seconds  0.0.0.0:3000->3000/tcp
```

### Step 6: View Container Logs
Check application logs to confirm it's running:
```bash
docker-compose logs -f
```

**Expected output:**
```
nodejs-hello-api  | 🚀 Server running on http://0.0.0.0:3000
nodejs-hello-api  | 📝 Environment: production
```

Press `Ctrl+C` to exit log view.

### Step 7: Test the API
Open your browser or use `curl` to test:

**Browser:** Visit [http://localhost:3000](http://localhost:3000)

**Using curl:**
```bash
# Health check
curl http://localhost:3000

# Get all items
curl http://localhost:3000/api/items

# Get single item
curl http://localhost:3000/api/items/1

# Create new item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Kubernetes","description":"Container orchestration"}'

# Update item
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Docker Updated","description":"Container platform updated"}'

# Delete item
curl -X DELETE http://localhost:3000/api/items/2
```

### Step 8: Stop the Container
When you're done testing:
```bash
docker-compose down
```

**What's happening:**
- Stops the running container
- Removes the container
- Keeps the Docker image (for faster restarts)

### Step 9: Cleanup (Optional)
Remove everything including the image:
```bash
docker-compose down --rmi all
```

---

## 📁 Directory Structure

```
docker-nodejs-hello-api/
│
├── index.js                 # Node.js REST API with CRUD
├── package.json             # Node.js dependencies (express)
├── docker-compose.yml       # Docker Compose service
├── .dockerignore           # Files excluded
├── .gitignore              # Files excluded from Git version control
├── .env.example            # Environment variable template
└── README.md
```

**Key Files Explained:**

| File | Purpose |
|------|---------|
| `index.js` | Express.js REST API with in-memory CRUD operations |
| `package.json` | Defines Node.js dependencies (Express 4.18.2) |
| `docker-compose.yml` | Defines how to build and run the container |
| `.dockerignore` | Excludes node_modules, logs, .git from image |
| `.gitignore` | Prevents committing node_modules, .env, logs to Git |
| `.env.example` | Template for environment variables (optional for this project) |

---

## 🐛 Troubleshooting Section

### Common Error 1: Port Already in Use
**Error:**
```
Error starting userland proxy: listen tcp4 0.0.0.0:3000: bind: address already in use
```

**Solution:**
Another application is using port 3000. Either:
- Stop the other application using port 3000
- Change the port in `docker-compose.yml`:
  ```yaml
  ports:
    - "3001:3000"  # Use port 3001 on host instead
  ```

**Find what's using port 3000:**
```bash
# On Linux/Mac
lsof -i :3000

# On Windows
netstat -ano | findstr :3000
```

---

### Common Error 2: Docker Daemon Not Running
**Error:**
```
Cannot connect to the Docker daemon at unix:///var/run/docker.sock
```

**Solution:**
Start Docker Desktop or Docker service:
- **Mac/Windows:** Open Docker Desktop application
- **Linux:**
  ```bash
  sudo systemctl start docker
  ```

---

### Common Error 3: Build Fails - npm Install Error
**Error:**
```
npm ERR! code ENOTFOUND
npm ERR! network request to https://registry.npmjs.org/express failed
```

**Solution:**
Network connectivity issue. Check:
1. Internet connection is active
2. If behind corporate proxy, configure Docker proxy settings
3. Try building again: `docker-compose build --no-cache`

---

### Common Error 4: Container Exits Immediately
**Check logs:**
```bash
docker-compose logs
```

**Common causes:**
- Missing `package.json` or `index.js`
- Syntax error in application code
- Port conflict (check Error 1 solution)

**Solution:**
Rebuild the image:
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

---

### Common Error 5: Permission Denied (Linux)
**Error:**
```
permission denied while trying to connect to the Docker daemon socket
```

**Solution:**
Add your user to docker group:
```bash
sudo usermod -aG docker $USER
newgrp docker
```

Or run with sudo (not recommended for production):
```bash
sudo docker-compose up -d
```

---

### Common Error 6: Health Check Failing
**Check container health:**
```bash
docker inspect nodejs-hello-api | grep -A 10 Health
```

**Solution:**
- Wait 40 seconds for initial startup (defined in `start_period`)
- Check if app is actually running: `docker-compose logs`
- Verify port 3000 is accessible inside container

---

## ✅ Validation Steps

Follow these steps to verify everything is working correctly.

### 1. Container Status Check
```bash
docker-compose ps
```
✅ **Expected:** Status should show "Up" (not "Exited")

### 2. Health Check Verification
```bash
docker inspect nodejs-hello-api --format='{{.State.Health.Status}}'
```
✅ **Expected:** Output should be `healthy` (after ~40 seconds)

### 3. API Root Endpoint Test
```bash
curl http://localhost:3000
```
✅ **Expected JSON response:**
```json
{
  "message": "Node.js Hello World API is running!",
  "endpoints": {
    "GET /": "API information",
    "GET /api/items": "Get all items",
    ...
  }
}
```

### 4. CRUD Operations Test

**READ - Get all items:**
```bash
curl http://localhost:3000/api/items
```
✅ **Expected:** JSON array with 2 default items (Docker, Node.js)

**CREATE - Add new item:**
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item","description":"Testing POST"}'
```
✅ **Expected:** Success response with new item ID

**READ - Get specific item:**
```bash
curl http://localhost:3000/api/items/3
```
✅ **Expected:** JSON object with the newly created item

**UPDATE - Modify item:**
```bash
curl -X PUT http://localhost:3000/api/items/3 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","description":"Testing PUT"}'
```
✅ **Expected:** Success response with updated data

**DELETE - Remove item:**
```bash
curl -X DELETE http://localhost:3000/api/items/3
```
✅ **Expected:** Success response confirming deletion

### 5. Browser Test
Open browser and visit:
- Main endpoint: http://localhost:3000
- Items list: http://localhost:3000/api/items

✅ **Expected:** See JSON responses in browser

### 6. Container Logs Check
```bash
docker-compose logs --tail=20
```
✅ **Expected:** Should see startup message and no error logs

### 7. Data Persistence Test (Important!)
```bash
# Stop container
docker-compose down

# Start again
docker-compose up -d

# Check items
curl http://localhost:3000/api/items
```
✅ **Expected:** Only 2 default items (any items you created are GONE - this is intentional, in-memory storage resets)

---

## 🎓 What You've Learned

After completing this tutorial, you now understand:

- ✅ How Docker Compose simplifies container orchestration
- ✅ The difference between Docker build and run phases
- ✅ How port mapping works (`3000:3000`)
- ✅ How environment variables are passed to containers
- ✅ What health checks are and why they matter
- ✅ How to read Docker logs for debugging
- ✅ The difference between persistent and in-memory storage

---

## 🔗 Next Steps

Ready to level up your Docker skills? Try these:

1. **Add Volume Persistence**: Modify to use volumes for data persistence
2. **Multi-Container Setup**: Add Redis or PostgreSQL with docker-compose
3. **Environment Management**: Create separate dev/prod compose files
4. **Docker Networks**: Learn about custom bridge networks
5. **Docker Hub**: Push your image to Docker Hub registry
6. **Kubernetes**: Deploy this API to a Kubernetes cluster

---

## 📝 License

MIT License - Feel free to use this project for learning purposes.

---

## 🤝 Contributing

This is a learning project. If you find issues or have improvements, feel free to submit a pull request!

---

**Happy Learning! 🐳**
