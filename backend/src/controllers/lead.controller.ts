import { Request, Response } from 'express';

import Lead from '../models/Lead';

export const createLead = async (
  req: Request,
  res: Response
) => {
  try {
    const lead = await Lead.create(req.body);

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create lead',
    });
  }
};
export const getLeads = async (
  req: Request,
  res: Response
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const totalRecords =
      await Lead.countDocuments();

    const totalPages = Math.ceil(
      totalRecords / limit
    );

    const leads = await Lead.find()
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: leads,
      currentPage: page,
      totalPages,
      totalRecords,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads',
    });
  }
};
export const updateLead = async (
  req: Request,
  res: Response
) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedLead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update lead',
    });
  }
};
export const deleteLead = async (
  req: Request,
  res: Response
) => {
  try {
    const lead = await Lead.findByIdAndDelete(
      req.params.id
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lead deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete lead',
    });
  }
};