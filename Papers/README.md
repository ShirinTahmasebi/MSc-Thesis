# Papers


[Overall directory tree](#directory-tree)

[Scalability](#scalability)

[Scalable Fog Layer](#scalable-fog-layer)

[Relay Nodes](#relay-nodes)

[Sink Nodes](#sink-nodes)

[Node Placement Related Works](#node-placement-related-works)

[Scalable Blockchain](#scalable-blockchain)

[Evaluation](#evaluation)

## Directory Tree
```
+-- Scalability
|   +-- Scalable Fog Layer
|   |   +-- Relay Nodes
|   |   +-- Sink Nodes
|   |   |   +-- Node Placement Related Works
|   +-- Scalable Blockchain
+-- Evaluation
|
...
```


## Scalability

### Scalable Fog Layer
Due to the fact that communicating with blockchain is power consuming and requires strong resources, It is not possible to force each fog node contribute in this communication (cost, energy, etc.). Hence, we can have 2 types of fog nodes: sink nodes and regular fog nodes. 

Sink nodes are resuorceful and have enough capability to talk to blockchain. They are responsible for:
1. Fetching device monitoring policies from relevant smart contracts.
2. Relay this policies to regular fog nodes.
3. Persist monitoring data (every one hour):
   * Fetch monitoring data from TSDB.
   * Write it to IPFS.
   * Store IPFS hash code to blockchain.

Regular fog nodes are not necessarily as resourceful as sink nodes. At first, They receive monitoring policies from sink nodes. Then, They are responsible for collecting monitoring data from devices and persisting them in TSDB.

#### Relay Nodes

These papers are about relay nodes which as far as I am concerned are irrelevant to the topic. I should talk about sink nodes, not relay nodes.

| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>A Novel Scheme for an Energy Efficient Internet of Things Based on Wireless Sensor Networks</sub>|<sub>10.3390/s151128603</sub>|<sub>Not relevant to the topic</sub>|<sub>No</sub>|
|<sub>Age of Information as a QoS Metric in a Relay-Based IoT Mobility Solution</sub>|<sub>10.1109/IWCMC.2018.8450441</sub>|<sub>Not relevant to the topic</sub>|<sub>No</sub>|
|<sub>Relay Node Deployment for a Reliable and Energy Efficient Wireless Sensor Network</sub>|<sub>10.1007/978-3-642-25462-8_41</sub>|<sub>Not relevant to the topic</sub>|<sub>No</sub>|
|<sub>Scalable Video Streaming Relay for Smart Mobile Devices in Wireless Networks</sub>|<sub>10.1371/journal.pone.0167403</sub>|<sub>Not relevant to the topic</sub>|<sub>No</sub>|
|<sub>Wireless Sensor Network Deployment for Water Use Efficiency in Irrigation</sub>|<sub>10.1145/1435473.1435487</sub>|<sub>Not relevant to the topic</sub>|<sub>No</sub>|
|<sub></sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|

#### Sink Nodes

| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>Sink Node Placement Strategies for Wireless Sensor Networks</sub>|<sub>10.1007/s11277-011-0453-x</sub>|<sub>In this paper there is a brief introduction to sink nodes and why it is necessary to use them. After that, some sink placement strategies that have been proposed beforehand are collected. Then, they are evaluated to compare their effects and improvements on network lifetime.</sub>|<sub>No</sub>|
|<sub></sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|

##### Node Placement Related Works


| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>A Novel Control Plane Optimization Strategy for Important Nodes in SDN-IoT Networks</sub>|<sub>10.1109/JIOT.2018.2888504</sub>|<sub>Due to the fact that using a centralized control plane may incur a bottleneck, in this paper a two-level hierarchy control framework is proposed to have a decentralized architecture. These two layers are called master and slave and the goal is to optimize controller placement in slave layer. The optimization objective is to minimize control delay and control cost of critical nodes. Node criticality is evaluated by Fuzzy AHP based on several criteria and factors: device attributes (type, location, and owner), service attributes (delay requirements, privacy requirements, the service user and service profit) and control frequency (number of communications with the controller at one given time). Finally, this optimization problem is solved by Particle Swarm Optimization (PSO) algorithm.</sub>|<sub>No</sub>|
|<sub>The controller placement problem for wireless SDN</sub>|<sub>10.1007/s11276-019-02077-5</sub>|<sub>In this paper the controller placement problem is investigated in a wireless SDN. Metrics which are considered in the proposed method are: 1) Link failure probability, 2) Average throughput in southbound interface 3) Transparency which is introduced as the latency caused by interference from controllers, 4) Latency. One of their contributions is that although the Euclidean distance is usually used to measure latency, a much more complex model is used to reflect the effects of collision and interference on latency. Finally, hill climbing with simulated annealing is used to find an efficient solution.</sub>|<sub>No</sub>|
|<sub>SDN Controller Placement With Delay-Overhead Balancing in Wireless Edge Networks</sub>|<sub>10.1109/TNSM.2018.2876064</sub>|<sub>Qin et al. studied the controller placement problem in edge networks. Since increasing the distance between controllers and nodes increases delay significantly, a scattered placement of controllers across the network would reduce both the distance and delay. But scattered placement may increase controller synchronization overhead. So, delay and controller synchronization overhead are 2 contradicting objectives. On the other hand, in the proposed model, there are two strategies for controller synchronization: leaderless, leader-based. Finally, the optimization objective is to minimize delay and controller synchronization overhead for both strategies. </sub>|<sub>No</sub>|
|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|



### Scalable Blockchain

| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>Management and Monitoring of IoT Devices Using Blockchain</sub>|<sub>10.3390/s19040856</sub>|<sub>In this paper a management and monitoring system is designed using hyperledger fabric. But as mentioned in the paper, the authors explained "monitoring" as the way to check if configurations have been correctly applied on devices or not. It seems this is not an accurate definition. Anyway, in the proposed architecture it is allowed to use a centralized database to store configuration files but due to centralization issues, it is highly recommended to avoid doing that.</sub>|<sub>Yes</sub>|
|<sub>Healthcare Blockchain System Using Smart Contracts for Secure Automated Remote Patient Monitoring</sub>|<sub>10.1007/s10916-018-0982-x</sub>|<sub>In this paper, a system proposed to securely store real-time monitoring data emitted from sensors used in healthcare. Although the main focus is on increasing security of data storage, there are some design notes which may increase scalability. One of them is that there are some devices which are somehow resource-intensive and do som preprocessing and preliminary analysis of data. Then the result of these process will be written to the blockchain. It can cause a decrease in transactions count.</sub>|<sub>Yes</sub>|
|<sub>MedRec: Using Blockchain for Medical Data Access and Permission Management</sub>|<sub>10.1109/OBD.2016.11</sub>|<sub>In this paper, two types of nodes are considered. One for each patient which is able to access its medical records and set permissions and access levels for them. Second for each medical center which is called provider. Providers use a centralized database to store patients records. Each provider create a query string to fetch relevant data and sends the query string to blockchain. So each patient can access its data by executing the query string over providers database. The provider database ip address and port should be provided to execute queries. </sub>|<sub>Yes</sub>|
|<sub>A Fog Computing Architecture to Share Sensor Data by Means of Blockchain Functionality</sub>|<sub>10.1109/ICFC.2019.00013</sub>|<sub>It has used a time-series database to store sensors' realtime data. Each sensor's time-series index is stored in blockchain (MultiChain) to be able to retrieve data. The TSDB used for benchmarking is influxDB.</sub>|<sub>Yes</sub>|
|<sub>A Safe and Efficient Storage Scheme Based on BlockChain and IPFS for Agricultural Products Tracking</sub>|<sub>10.3966/199115992018122906015</sub>|<sub>It has used IPFS to create a tree structure to store data for each sensor.</sub>|<sub>Yes</sub>|
|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|


## Evaluation

| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>Scalable Access Management in IoT using Blockchain: a Performance Evaluation</sub>|<sub>10.1109/JIOT.2018.2879679</sub>|<sub></sub>|<sub>No</sub>|
|<sub>Performance Evaluation of the Quorum Blockchain Platform</sub>|<sub>arXiv:1809.03421</sub>|<sub></sub>|<sub>No</sub>|
|<sub>FogBus: A Blockchain-based Lightweight Framework for Edge and Fog Computing</sub>|<sub>arXiv:1811.11978</sub>|<sub></sub>|<sub>No</sub>|
|<sub>Design and Implementation of an Integrated  IoT Blockchain Platform for Sensing Data Integrity</sub>|<sub>10.3390/s19102228</sub>|<sub></sub>|<sub>No</sub>|
|<sub>A detailed and real-time performance monitoring framework for blockchain systems</sub>|<sub>10.1145/3183519.3183546</sub>|<sub></sub>|<sub>No</sub>|
|<sub></sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|
