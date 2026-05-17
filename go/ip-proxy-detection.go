package voxgigipproxydetectionsdk

import (
	"github.com/voxgig-sdk/ip-proxy-detection-sdk/go/core"
	"github.com/voxgig-sdk/ip-proxy-detection-sdk/go/entity"
	"github.com/voxgig-sdk/ip-proxy-detection-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-proxy-detection-sdk/go/utility"
)

// Type aliases preserve external API.
type IpProxyDetectionSDK = core.IpProxyDetectionSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpProxyDetectionEntity = core.IpProxyDetectionEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpProxyDetectionError = core.IpProxyDetectionError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCheckEntityFunc = func(client *core.IpProxyDetectionSDK, entopts map[string]any) core.IpProxyDetectionEntity {
		return entity.NewCheckEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpProxyDetectionSDK = core.NewIpProxyDetectionSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
