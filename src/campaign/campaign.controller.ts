import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  HttpException,
  UseGuards,
  UseInterceptors,
  HttpStatus,
  UploadedFile,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create.campaign.dto';
import { mongo } from 'mongoose';
import { UpdateCampaignDto } from './dto/update.campaign.dto';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileURLToPath } from 'url';

@Controller('campaign')
export class CampaignController {
  constructor(private campaignservice: CampaignService) {}

  @Get()
  async getcampaign() {
    try {
      return await this.campaignservice.findAll();
    } catch (error) {
      throw error.message;
    }
  }

  @Get('/:id')
  async getUserbyId(@Param('id') id: string) {
    try {
      const isvalid: boolean = mongo.ObjectId.isValid(id);
      if (!isvalid) {
        throw new HttpException('Invalid Id', 400);
      }
      const user = await this.campaignservice.findByid(id);
      return user;
    } catch (error) {
      throw error.message;
    }
  }

  @Patch('/:id')
  async upatecampaign(
    @Param('id') id: string,
    @Body() updatecampaigndto: UpdateCampaignDto,
  ) {
    try {
      const isvalid: boolean = mongo.ObjectId.isValid(id);
      if (!isvalid) {
        throw new HttpException('invalid id', 404);
      }
      return await this.campaignservice.upadateCampaign(id, updatecampaigndto);
    } catch (error) {
      throw error.message;
    }
  }

  @Delete('/:id')
  async deleteCampaign(@Param('id') id: string): Promise<void> {
    try {
      const isValid: boolean = mongo.ObjectId.isValid(id);
      if (!isValid) {
        throw new HttpException('Invalid id', 404);
      }
      await this.campaignservice.deleteCampaign(id);
    } catch (error) {
      throw error.message;
    }
  }

  @Post('/new')
  // @UseGuards(AuthGuard())
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, cb) => {
          const filename = `${file.originalname}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image')) {
          cb(null, true);
        } else {
          cb(
            new HttpException(
              'Only image files are allowed',
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
      },
    }),
  )
  async create(
    @UploadedFile() image: Express.Multer.File, // Ensure the type of image is Express.Multer.File
    @Body() createCampaignDto: CreateCampaignDto,
  ) {
    try {
      if (image) {
        console.log();
        createCampaignDto.image = image.filename;
      } else {
        createCampaignDto.image = null;
      }
      const CreateCampaign =
        await this.campaignservice.createCampaign(createCampaignDto);
      return {
        message: 'Campaign Created Successfully !',
        campaign: CreateCampaign,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}