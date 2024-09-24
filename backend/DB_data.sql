-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: comicwebdb
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `annoID` int NOT NULL AUTO_INCREMENT,
  `annoContent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`annoID`),
  UNIQUE KEY `annoContent` (`annoContent`),
  UNIQUE KEY `announcements_anno_i_d` (`annoID`),
  UNIQUE KEY `annoContent_2` (`annoContent`),
  UNIQUE KEY `annoContent_3` (`annoContent`),
  UNIQUE KEY `annoContent_4` (`annoContent`),
  UNIQUE KEY `annoContent_5` (`annoContent`),
  UNIQUE KEY `annoContent_6` (`annoContent`),
  UNIQUE KEY `annoContent_7` (`annoContent`),
  UNIQUE KEY `annoContent_8` (`annoContent`),
  UNIQUE KEY `annoContent_9` (`annoContent`),
  UNIQUE KEY `annoContent_10` (`annoContent`),
  UNIQUE KEY `annoContent_11` (`annoContent`),
  UNIQUE KEY `annoContent_12` (`annoContent`),
  UNIQUE KEY `annoContent_13` (`annoContent`),
  UNIQUE KEY `annoContent_14` (`annoContent`),
  UNIQUE KEY `annoContent_15` (`annoContent`),
  UNIQUE KEY `annoContent_16` (`annoContent`),
  UNIQUE KEY `annoContent_17` (`annoContent`),
  UNIQUE KEY `annoContent_18` (`annoContent`),
  UNIQUE KEY `annoContent_19` (`annoContent`),
  UNIQUE KEY `annoContent_20` (`annoContent`),
  UNIQUE KEY `annoContent_21` (`annoContent`),
  UNIQUE KEY `annoContent_22` (`annoContent`),
  UNIQUE KEY `annoContent_23` (`annoContent`),
  UNIQUE KEY `annoContent_24` (`annoContent`),
  UNIQUE KEY `annoContent_25` (`annoContent`),
  UNIQUE KEY `annoContent_26` (`annoContent`),
  UNIQUE KEY `annoContent_27` (`annoContent`),
  UNIQUE KEY `annoContent_28` (`annoContent`),
  UNIQUE KEY `annoContent_29` (`annoContent`),
  UNIQUE KEY `annoContent_30` (`annoContent`),
  UNIQUE KEY `annoContent_31` (`annoContent`),
  UNIQUE KEY `annoContent_32` (`annoContent`),
  UNIQUE KEY `annoContent_33` (`annoContent`),
  UNIQUE KEY `annoContent_34` (`annoContent`),
  UNIQUE KEY `annoContent_35` (`annoContent`),
  UNIQUE KEY `annoContent_36` (`annoContent`),
  UNIQUE KEY `annoContent_37` (`annoContent`),
  UNIQUE KEY `annoContent_38` (`annoContent`),
  UNIQUE KEY `annoContent_39` (`annoContent`),
  UNIQUE KEY `annoContent_40` (`annoContent`),
  UNIQUE KEY `annoContent_41` (`annoContent`),
  UNIQUE KEY `annoContent_42` (`annoContent`),
  UNIQUE KEY `annoContent_43` (`annoContent`),
  UNIQUE KEY `annoContent_44` (`annoContent`),
  UNIQUE KEY `annoContent_45` (`annoContent`),
  UNIQUE KEY `annoContent_46` (`annoContent`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (1,'版本更新公告：新版本將於2024年09月05日發布，包含多項功能優化和修復。','2024-09-03 08:27:29','2024-09-03 08:27:29'),(2,'新功能即將上線，敬請期待。','2024-09-03 08:27:29','2024-09-03 08:27:29'),(3,'系統維護通知：系統將於2024年08月30日00:00至04:00進行例行維護，屆時部分服務可能無法使用。','2024-09-03 08:27:29','2024-09-03 08:27:29'),(4,'九月份活動預告：參加活動有機會贏得豐富獎品。','2024-09-03 08:27:29','2024-09-03 08:27:29'),(5,'用戶反饋徵集：歡迎提供寶貴意見，我們將持續改進。','2024-09-03 08:27:29','2024-09-03 08:27:29');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comiclists`
--

DROP TABLE IF EXISTS `comiclists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comiclists` (
  `comicId` int NOT NULL AUTO_INCREMENT,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`comicId`),
  UNIQUE KEY `comic_lists_comic_id` (`comicId`),
  CONSTRAINT `comiclists_ibfk_1` FOREIGN KEY (`comicId`) REFERENCES `comics` (`comicId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comiclists`
--

LOCK TABLES `comiclists` WRITE;
/*!40000 ALTER TABLE `comiclists` DISABLE KEYS */;
INSERT INTO `comiclists` VALUES (1,'https://taiwan-image.bookwalker.com.tw/product/86687/zoom_big_86687.jpg','普通上班族一郎被召喚到異世界，成為一名冒險者，展開了驚險的旅程。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UfMf6EOnND1EnTJ_KrHbLfiAQXddnKgE5g&s','科學家真一發現了時間旅行的方法，並在過去遇見了命中註定的戀人。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(3,'https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180115/868f193dba234a12bfb4aa4753a2e58e.jpeg','在一場全球災難後，健太和一群倖存者必須合作求生，並尋找重建文明的方法。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(4,'https://p0.itc.cn/q_70/images03/20210804/4811c16aac2041f79578daa57508e00b.jpeg','年輕的忍者曉在家族被敵對勢力滅門後，踏上了復仇之路，並逐漸揭開陰謀的真相。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWp-p-L4dJfksunoUExN5wvRJjiAJJONTgA&s','在一所專為擁有超能力的學生設立的學院裡，蓮展現了他驚人的力量，並與同學們一起對抗邪惡勢力。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(6,'https://i.pinimg.com/236x/c0/96/95/c0969548358571305370b44d7efd6caf.jpg','天才偵探光和神秘怪盜影在城市中展開了智慧與計謀的對決。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(7,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9dC_gE-ZSGnWcwxdybMqG1XHOoGA_Lrr9g&s','鋼琴師遼與他的新任小提琴手悠相遇，音樂讓他們的心靈產生了微妙的共鳴。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(8,'https://images.vocus.cc/17966820-0cb4-45b7-ba12-525c2c415074.jpg','在末世的廢墟中，直樹與翔意外相遇，兩人在尋找生存希望的過程中互相依靠。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(9,'https://images.vocus.cc/39822044-4509-4ccc-9ac6-80914f80aa82.jpg','咖啡館老闆圭一與常客蓮之間的關係在每天的咖啡香中逐漸加深，隱藏的秘密也隨之揭開。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(10,'https://down-tw.img.susercontent.com/file/ca5ce94f632ff0ca8eaff582200d2460','兩名探險家航一和拓海在未知的土地上展開冒險，愛情在挑戰與發現中萌芽。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(11,'https://images.vocus.cc/f491ee0a-2a9d-4088-a0ba-1a7a98436352.jpg','白天是精英律師，夜晚是神秘畫家的真司，與同樣雙重身份的健一陷入一段複雜的情感糾葛。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(12,'https://images.vocus.cc/59c030e8-b54a-4a7a-964d-efa81c371398.jpg','天文學家遙與攝影師光在追逐流星的旅途中相識，兩人的關係在星空下漸漸發展。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(13,'https://cdn.pixabay.com/photo/2022/08/27/09/16/design-7414038_1280.jpg','小春在一間貓咪咖啡館打工，每天都被可愛的貓咪和顧客們的趣事圍繞。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(14,'https://live.staticflickr.com/659/20906730856_efc2f66b68_c.jpg','都市女孩紗羅搬到鄉下的小屋，開始了種菜、做飯和與自然共處的放鬆生活。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(15,'https://image.cdn2.seaart.ai/2024-03-19/cnstrm5e878c73bvgheg/b6498ddc746ed2bf432e40a0d657ebdbc8e2de8e_high.webp','甜點師莉奈和她的朋友們在甜品店裡一起創作美味的甜點，享受每一個快樂的瞬間。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(16,'https://image.cdn2.seaart.ai/2024-01-20/cmm1u9te878c73a8u840/cdc357eb1624badb58077ecadf6f92b50ac05871_high.webp','小夏和朋友們定期舉辦下午茶聚會，分享生活中的小確幸和甜點。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(17,'https://images.vocus.cc/a1d70142-16c6-4c38-affc-dcfd9c42bdaa.jpg','小智在街角經營一家小書店，和顧客們分享書籍的樂趣與故事。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(18,'https://thumbs.dreamstime.com/b/%E5%A4%8D%E5%8F%A4%E6%BC%AB%E5%A8%81%E6%BC%AB%E7%94%BB%E5%B0%81%E9%9D%A2-%E5%8D%A1%E5%B0%94%E5%8A%A0%E9%87%8C%E9%98%BF%E5%B0%94%E4%BC%AF%E5%A1%94%E7%9C%81-%E5%B9%B4-%E6%9C%88-%E6%97%A5-278618265.jpg','小圓每天都去拜訪鄰居家的小狗，逐漸成為牠最好的朋友。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(19,'https://www.mx-fm.com/upfile/xsfm/202407/2024072032247513.jpg','高中生湊在最新的虛擬實境遊戲中意外發現了遊戲與現實世界的交界點，並捲入了驚天陰謀。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(20,'https://shop.r10s.jp/book/cabinet/7166/9784866577166_1_2.jpg','考古學家綾香在探索古城遺跡時，發現了隱藏千年的秘密，並展開了一段神秘的冒險。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(21,'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/085/44/0010854427.jpg&v=5e846d35k&w=375&h=375','靈異偵探社的成員們專門調查都市傳說和超自然事件，他們不僅要面對靈異現象，還要解開背後的真相。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(22,'https://www.hmecy.com/wp-content/uploads/2022/07/20220730_62e4ff02344aa.jpg','年輕的藝術家楓在追尋靈感的過程中，逐漸發現自己被捲入了一場與古老畫作有關的神秘事件。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(23,'https://cdn.kdkw.jp/cover_1000/322210/322210000930.jpg','一群冒險者來到一個神秘的遺忘之島，試圖解開其中的古老謎題，並尋找失落的寶藏。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(24,'https://img.zcool.cn/community/010cbf6513a668000c291000baec21.jpg?imageMogr2/auto-orient/thumbnail/520x390r%3E/gravity/center/crop/520x390/sharpen/0.5/quality/80','在不遠的未來，人們可以選擇保存和觀看自己的回憶，而主角悠斗卻發現了這項技術的背後暗藏陰謀。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(25,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K9hoMznJYTCULst68d4cliWGV49AA8hB9g&s','高中生陽奈在暑假中鼓起勇氣向青梅竹馬的拓海告白，他們的關係因此發生了微妙的變化。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(26,'https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088921310/1200/9784088921310.jpg','在雪花飄落的城市中，紗雪和凌意外重逢，他們之間未解的情感再次浮現。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(27,'https://i0.wp.com/acp.idv.tw/wp-content/uploads/444487862_476444194917286_4257625653180151509_n.jpg?ssl=1','莉音和修輔在大學校園裡的一場雨中重新相遇，並重溫了他們在高中時期的秘密約定。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(28,'https://upload.wikimedia.org/wikipedia/zh/thumb/1/14/%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AF%E3%81%A9%E3%81%86%E3%81%8B%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B.jpg/220px-%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AF%E3%81%A9%E3%81%86%E3%81%8B%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B.jpg','咖啡館的店員美香和常客透之間的日常互動漸漸發展成為一段溫暖的愛情。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(29,'https://storage.googleapis.com/comic-star-prod/fs/cover/09c268fa-c69a-41a8-ba2f-c7a22fb6fae7.jpg','千春在一個秋日午後與昔日戀人誠相遇，兩人試圖找回失去的時光。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(30,'https://i0.wp.com/acp.idv.tw/wp-content/uploads/2c9b74536881199b29e3495e4f057d28.jpg?ssl=1','在夏季的祭典上，莉子和優雅第一次互相告白，星空見證了他們的初吻。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(31,'https://www.tohan.com.tw/data/goods/gallery_org/202204/1650935750951693245.jpg','綾音發現了一個夜晚才會出現的奇幻花園，並遇見了守護者蓮，展開跨越時空的愛戀。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(32,'https://www.books.com.tw/img/001/067/02/0010670201.jpg','美琴遇見神秘少年奏一，在雨天的咖啡館中重新燃起對鋼琴的熱愛，決心挑戰音樂比賽。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(33,'https://img.acgn.cc/img/430600/430506/1.jpg','夏月和好友們參加觀星活動，共同度過了難忘的青春夏天，並找到了屬於自己的未來。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(34,'https://image.cdn2.seaart.ai/2024-01-21/cmmpe55e878c73bh24ng/2462a96139c1b31a8758cf9446b1b8bb7da0c200_high.webp','遙子遇見尋找童年約定的湊，隨著記憶重現，他們的命運被緊密相連。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(35,'https://i.pinimg.com/236x/44/64/2c/44642cd787189e18f2d679dbb8ab1cba.jpg','冷漠的紫苑能看到他人內心陰影，與學長光也的相遇讓她重新認識自己。','2024-09-03 08:13:57','2024-09-03 08:13:57'),(36,'https://gd-hbimg.huaban.com/5d1f58c41fc08f2be3b4b1e5310b7865639c1011b947-HItUUf_fw658','真奈夢見未來將發生的事，直到遇見與夢中少年相似的轉學生晴斗。','2024-09-03 08:13:57','2024-09-03 08:13:57');
/*!40000 ALTER TABLE `comiclists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comics`
--

DROP TABLE IF EXISTS `comics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comics` (
  `comicId` int NOT NULL AUTO_INCREMENT,
  `comicName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('冒險','靈異','愛情','BL','治癒','青春') COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numberList` int NOT NULL DEFAULT '10',
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`comicId`),
  UNIQUE KEY `comicName` (`comicName`),
  UNIQUE KEY `comics_comic_id` (`comicId`),
  UNIQUE KEY `comics_comic_name` (`comicName`),
  UNIQUE KEY `comicName_2` (`comicName`),
  UNIQUE KEY `comicName_3` (`comicName`),
  UNIQUE KEY `comicName_4` (`comicName`),
  UNIQUE KEY `comicName_5` (`comicName`),
  UNIQUE KEY `comicName_6` (`comicName`),
  UNIQUE KEY `comicName_7` (`comicName`),
  UNIQUE KEY `comicName_8` (`comicName`),
  UNIQUE KEY `comicName_9` (`comicName`),
  UNIQUE KEY `comicName_10` (`comicName`),
  UNIQUE KEY `comicName_11` (`comicName`),
  UNIQUE KEY `comicName_12` (`comicName`),
  UNIQUE KEY `comicName_13` (`comicName`),
  UNIQUE KEY `comicName_14` (`comicName`),
  UNIQUE KEY `comicName_15` (`comicName`),
  UNIQUE KEY `comicName_16` (`comicName`),
  UNIQUE KEY `comicName_17` (`comicName`),
  UNIQUE KEY `comicName_18` (`comicName`),
  UNIQUE KEY `comicName_19` (`comicName`),
  UNIQUE KEY `comicName_20` (`comicName`),
  UNIQUE KEY `comicName_21` (`comicName`),
  UNIQUE KEY `comicName_22` (`comicName`),
  UNIQUE KEY `comicName_23` (`comicName`),
  UNIQUE KEY `comicName_24` (`comicName`),
  UNIQUE KEY `comicName_25` (`comicName`),
  UNIQUE KEY `comicName_26` (`comicName`),
  UNIQUE KEY `comicName_27` (`comicName`),
  UNIQUE KEY `comicName_28` (`comicName`),
  UNIQUE KEY `comicName_29` (`comicName`),
  UNIQUE KEY `comicName_30` (`comicName`),
  UNIQUE KEY `comicName_31` (`comicName`),
  UNIQUE KEY `comicName_32` (`comicName`),
  UNIQUE KEY `comicName_33` (`comicName`),
  UNIQUE KEY `comicName_34` (`comicName`),
  UNIQUE KEY `comicName_35` (`comicName`),
  UNIQUE KEY `comicName_36` (`comicName`),
  UNIQUE KEY `comicName_37` (`comicName`),
  UNIQUE KEY `comicName_38` (`comicName`),
  UNIQUE KEY `comicName_39` (`comicName`),
  UNIQUE KEY `comicName_40` (`comicName`),
  UNIQUE KEY `comicName_41` (`comicName`),
  UNIQUE KEY `comicName_42` (`comicName`),
  UNIQUE KEY `comicName_43` (`comicName`),
  UNIQUE KEY `comicName_44` (`comicName`),
  UNIQUE KEY `comicName_45` (`comicName`),
  UNIQUE KEY `comicName_46` (`comicName`),
  UNIQUE KEY `comicName_47` (`comicName`),
  UNIQUE KEY `comicName_48` (`comicName`),
  UNIQUE KEY `comicName_49` (`comicName`),
  UNIQUE KEY `comicName_50` (`comicName`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comics`
--

LOCK TABLES `comics` WRITE;
/*!40000 ALTER TABLE `comics` DISABLE KEYS */;
INSERT INTO `comics` VALUES (1,'異世界的冒險者','https://taiwan-image.bookwalker.com.tw/product/86687/zoom_big_86687.jpg','冒險','異世界',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(2,'時間旅行者的戀歌','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UfMf6EOnND1EnTJ_KrHbLfiAQXddnKgE5g&s','冒險','科幻',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(3,'末日倖存者','https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180115/868f193dba234a12bfb4aa4753a2e58e.jpeg','冒險','末世',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(4,'忍者的復仇之路','https://p0.itc.cn/q_70/images03/20210804/4811c16aac2041f79578daa57508e00b.jpeg','冒險','武俠',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(5,'超能學院','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWp-p-L4dJfksunoUExN5wvRJjiAJJONTgA&s','冒險','超能力',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(6,'偵探與怪盜的追逐','https://i.pinimg.com/236x/c0/96/95/c0969548358571305370b44d7efd6caf.jpg','冒險','懸疑',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(7,'鋼琴師的心弦','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9dC_gE-ZSGnWcwxdybMqG1XHOoGA_Lrr9g&s','BL','音樂',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(8,'廢墟中的暖陽','https://images.vocus.cc/17966820-0cb4-45b7-ba12-525c2c415074.jpg','BL','末世',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(9,'咖啡香中的秘密','https://images.vocus.cc/39822044-4509-4ccc-9ac6-80914f80aa82.jpg','BL','日常',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(10,'探險家的浪漫','https://down-tw.img.susercontent.com/file/ca5ce94f632ff0ca8eaff582200d2460','BL','冒險',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(11,'雙重生活的彼岸','https://images.vocus.cc/f491ee0a-2a9d-4088-a0ba-1a7a98436352.jpg','BL','懸疑',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(12,'星空下的邂逅','https://images.vocus.cc/59c030e8-b54a-4a7a-964d-efa81c371398.jpg','BL','浪漫',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(13,'貓咪咖啡館的日常','https://cdn.pixabay.com/photo/2022/08/27/09/16/design-7414038_1280.jpg','治癒','治癒',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(14,'鄉村小屋的悠閒時光','https://live.staticflickr.com/659/20906730856_efc2f66b68_c.jpg','治癒','田園',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(15,'快樂的甜點時光','https://image.cdn2.seaart.ai/2024-03-19/cnstrm5e878c73bvgheg/b6498ddc746ed2bf432e40a0d657ebdbc8e2de8e_high.webp','治癒','美食',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(16,'午后的午後茶','https://image.cdn2.seaart.ai/2024-01-20/cmm1u9te878c73a8u840/cdc357eb1624badb58077ecadf6f92b50ac05871_high.webp','治癒','友情',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(17,'在街角的小書店','https://images.vocus.cc/a1d70142-16c6-4c38-affc-dcfd9c42bdaa.jpg','治癒','文學',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(18,'鄰居家的小狗','https://thumbs.dreamstime.com/b/%E5%A4%8D%E5%8F%A4%E6%BC%AB%E5%A8%81%E6%BC%AB%E7%94%BB%E5%B0%81%E9%9D%A2-%E5%8D%A1%E5%B0%94%E5%8A%A0%E9%87%8C%E9%98%BF%E5%B0%94%E4%BC%AF%E5%A1%94%E7%9C%81-%E5%B9%B4-%E6%9C%88-%E6%97%A5-278618265.jpg','治癒','動物',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(19,'虛擬世界的邊緣','https://www.mx-fm.com/upfile/xsfm/202407/2024072032247513.jpg','靈異','科技',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(20,'古城的秘密','https://shop.r10s.jp/book/cabinet/7166/9784866577166_1_2.jpg','靈異','冒險',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(21,'靈異偵探社','https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/085/44/0010854427.jpg&v=5e846d35k&w=375&h=375','靈異','靈異',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(22,'藝術家的謎團','https://www.hmecy.com/wp-content/uploads/2022/07/20220730_62e4ff02344aa.jpg','靈異','懸疑',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(23,'遺忘之島的謎題','https://cdn.kdkw.jp/cover_1000/322210/322210000930.jpg','靈異','探險',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(24,'未來的回憶','https://img.zcool.cn/community/010cbf6513a668000c291000baec21.jpg?imageMogr2/auto-orient/thumbnail/520x390r%3E/gravity/center/crop/520x390/sharpen/0.5/quality/80','靈異','科幻',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(25,'夏日微風的告白','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K9hoMznJYTCULst68d4cliWGV49AA8hB9g&s','愛情','浪漫愛情',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(26,'冬夜下的牽絆','https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088921310/1200/9784088921310.jpg','愛情','浪漫愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(27,'雨中的秘密約定','https://i0.wp.com/acp.idv.tw/wp-content/uploads/444487862_476444194917286_4257625653180151509_n.jpg?ssl=1','愛情','浪漫愛情',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(28,'晨光中的愛戀','https://upload.wikimedia.org/wikipedia/zh/thumb/1/14/%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AF%E3%81%A9%E3%81%86%E3%81%8B%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B.jpg/220px-%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AF%E3%81%A9%E3%81%86%E3%81%8B%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B.jpg','愛情','浪漫愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(29,'落葉歸根的邂逅','https://storage.googleapis.com/comic-star-prod/fs/cover/09c268fa-c69a-41a8-ba2f-c7a22fb6fae7.jpg','愛情','浪漫愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(30,'星光下的初吻','https://i0.wp.com/acp.idv.tw/wp-content/uploads/2c9b74536881199b29e3495e4f057d28.jpg?ssl=1','愛情','浪漫愛情',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(31,'星夜下的秘密花園','https://www.tohan.com.tw/data/goods/gallery_org/202204/1650935750951693245.jpg','青春','幻想愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(32,'雨中的甜蜜旋律','https://www.books.com.tw/img/001/067/02/0010670201.jpg','青春','校園愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(33,'那天，我們一起看星星','https://img.acgn.cc/img/430600/430506/1.jpg','青春','青春成長',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(34,'櫻花飄落的約定','https://image.cdn2.seaart.ai/2024-01-21/cmmpe55e878c73bh24ng/2462a96139c1b31a8758cf9446b1b8bb7da0c200_high.webp','青春','浪漫愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(35,'光與影的交錯','https://i.pinimg.com/236x/44/64/2c/44642cd787189e18f2d679dbb8ab1cba.jpg','青春','神秘愛情',10,1,'2024-09-03 08:12:44','2024-09-03 08:12:44'),(36,'夢境中的他和她','https://gd-hbimg.huaban.com/5d1f58c41fc08f2be3b4b1e5310b7865639c1011b947-HItUUf_fw658','青春','奇幻愛情',10,0,'2024-09-03 08:12:44','2024-09-03 08:12:44');
/*!40000 ALTER TABLE `comics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `users_email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `email_32` (`email`),
  UNIQUE KEY `email_33` (`email`),
  UNIQUE KEY `email_34` (`email`),
  UNIQUE KEY `email_35` (`email`),
  UNIQUE KEY `email_36` (`email`),
  UNIQUE KEY `email_37` (`email`),
  UNIQUE KEY `email_38` (`email`),
  UNIQUE KEY `email_39` (`email`),
  UNIQUE KEY `email_40` (`email`),
  UNIQUE KEY `email_41` (`email`),
  UNIQUE KEY `email_42` (`email`),
  UNIQUE KEY `email_43` (`email`),
  UNIQUE KEY `email_44` (`email`),
  UNIQUE KEY `email_45` (`email`),
  UNIQUE KEY `email_46` (`email`),
  UNIQUE KEY `email_47` (`email`),
  UNIQUE KEY `email_48` (`email`),
  UNIQUE KEY `email_49` (`email`),
  UNIQUE KEY `email_50` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@gmail.com','test','$2b$10$kxxBfzrAHaR80AycqvNOX.jaYPHvUI.6DJe1wBqtoUmk/0wbvRqTy','2024-09-03 09:25:38','2024-09-03 09:25:38'),(3,'test2@gmail.com','test','$2b$10$7kC/ZV5glfYX3/K9WtuVROZZkNbAvrS3yRoAt97t9Vik5xKKbrH96','2024-09-03 09:39:11','2024-09-03 09:39:11'),(4,'zx123123@gmail.com','test1','$2b$10$/gI8BnDStaYJyBujF6B70OxXdnz0fNuDA.d94HUvaUcHxfK.QH6eO','2024-09-03 09:50:18','2024-09-03 09:50:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-24 16:19:39
