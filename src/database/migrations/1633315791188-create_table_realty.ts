import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableRealty1633315791188 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			CREATE TABLE IF NOT EXISTS realty (
				id           							INT(11)       NOT NULL AUTO_INCREMENT,
				latitude              		DECIMAL(18,7) DEFAULT NULL,
				longitude              		DECIMAL(18,7) DEFAULT NULL,
				state             				VARCHAR(2) 		NOT NULL,
				city           						VARCHAR(200) 	NOT NULL,
				neighborhood            	VARCHAR(200) 	NOT NULL,
				street      							VARCHAR(250) 	NOT NULL,
				number              			INT(11) 			NOT NULL,
				complement            		VARCHAR(250)  DEFAULT NULL,
				postalCode                VARCHAR(20) 	NOT NULL,
        numberRooms               INT(11)       NOT NULL,
        buildingArea              DECIMAL(10,2) NOT NULL,
        parkingSpaces             INT(11)       NOT NULL,
				status										VARCHAR(15)		NOT NULL CHECK (status IN ('SOLD','AVALLIABLE','RESERVED')) DEFAULT 'AVALLIABLE',
        amount                    DECIMAL(10,2) NOT NULL,
				createdAt               	DATETIME 			NOT NULL DEFAULT CURRENT_TIMESTAMP,
  			updatedAt              		DATETIME     	NULL ON UPDATE CURRENT_TIMESTAMP,
				PRIMARY KEY (id)
			);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS realty`);
  }
}
