# Papers

## Scalability

### Relay Nodes

| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>A Novel Scheme for an Energy Efficient Internet of Things Based on Wireless Sensor Networks</sub>|<sub>10.3390/s151128603</sub>|<sub></sub>|<sub>No</sub>|
|<sub>Age of Information as a QoS Metric in a Relay-Based IoT Mobility Solution</sub>|<sub>10.1109/IWCMC.2018.8450441</sub>|<sub></sub>|<sub>No</sub>|
|<sub>Relay Node Deployment for a Reliable and Energy Efficient Wireless Sensor Network</sub>|<sub>10.1007/978-3-642-25462-8_41</sub>|<sub></sub>|<sub>No</sub>|
|<sub>Scalable Video Streaming Relay for Smart Mobile Devices in Wireless Networks</sub>|<sub>10.1371/journal.pone.0167403</sub>|<sub></sub>|<sub>No</sub>|
|<sub>Wireless Sensor Network Deployment for Water Use Efficiency in Irrigation</sub>|<sub>10.1145/1435473.1435487</sub>|<sub></sub>|<sub>No</sub>|
|<sub></sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|


### Scalable Blockchain

| Title|DOI|Main Contributions|Summarized|
|---------------|:-:|:---------------------------------------------------------------------------------------:|:---:|
|<sub>Management and Monitoring of IoT Devices Using Blockchain</sub>|<sub>10.3390/s19040856</sub>|<sub>In this paper a management and monitoring system is designed using hyperledger fabric. But as mentioned in the paper, the authors explained "monitoring" as the way to check if configurations have been correctly applied on devices or not. It seems this is not an accurate definition. Anyway, in the proposed architecture it is allowed to use a centralized database to store configuration files but due to centralization issues, it is highly recommended to avoid doing that.</sub>|<sub>Yes</sub>|
|<sub>Healthcare Blockchain System Using Smart Contracts for Secure Automated Remote Patient Monitoring</sub>|<sub>10.1007/s10916-018-0982-x</sub>|<sub>In this paper, a system proposed to securely store real-time monitoring data emitted from sensors used in healthcare. Although the main focus is on increasing security of data storage, there are some design notes which may increase scalability. One of them is that there are some devices which are somehow resource-intensive and do som preprocessing and preliminary analysis of data. Then the result of these process will be written to the blockchain. It can cause a decrease in transactions count.</sub>|<sub>Yes</sub>|
|<sub>MedRec: Using Blockchain for Medical Data Access and Permission Management</sub>|<sub>10.1109/OBD.2016.11</sub>|<sub>In this paper, two types of nodes are considered. One for each patient which is able to access its medical records and set permissions and access levels for them. Second for each medical center which is called provider. Providers use a centralized database to store patients records. Each provider create a query string to fetch relevant data and sends the query string to blockchain. So each patient can access its data by executing the query string over providers database. The provider database ip address and port should be provided to execute queries. </sub>|<sub>Yes</sub>|
|<sub>A Fog Computing Architecture to Share Sensor Data by Means of Blockchain Functionality</sub>|<sub>10.1109/ICFC.2019.00013</sub>|<sub>It has used a time-series database to store sensors' realtime data. Each sensor's time-series index is stored in blockchain (MultiChain) to be able to retrieve data. The TSDB used for benchmarking is influxDB.</sub>|<sub>Yes</sub>|
|<sub>A Safe and Efficient Storage Scheme Based on BlockChain and IPFS for Agricultural Products Tracking</sub>|<sub>10.3966/199115992018122906015</sub>|<sub>It has used IPFS to create a tree structure to store data for each sensor.</sub>|<sub>Yes</sub>|
|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|<sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>|<sub></sub>|

